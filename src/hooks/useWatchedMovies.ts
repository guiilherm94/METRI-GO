'use client';

import { useState, useEffect, useCallback } from 'react';

export interface WatchedMovie {
    id: string;
    movieId: string;
    watchedAt: string;
    rating: number | null;
}

export function useWatchedMovies() {
    const [watchedMovies, setWatchedMovies] = useState<WatchedMovie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchWatchedMovies = useCallback(async () => {
        try {
            const response = await fetch('/api/watched');
            if (response.ok) {
                const data = await response.json();
                setWatchedMovies(data);
            }
        } catch (error) {
            console.error('Error fetching watched movies:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchWatchedMovies();
    }, [fetchWatchedMovies]);

    const isWatched = useCallback((movieId: string) => {
        return watchedMovies.some((m) => m.movieId === movieId);
    }, [watchedMovies]);

    const toggleWatched = async (movieId: string) => {
        // Optimistic update
        const isCurrentlyWatched = isWatched(movieId);

        setWatchedMovies((prev) => {
            if (isCurrentlyWatched) {
                return prev.filter((m) => m.movieId !== movieId);
            } else {
                return [...prev, { id: 'temp', movieId, watchedAt: new Date().toISOString(), rating: null }];
            }
        });

        try {
            if (isCurrentlyWatched) {
                await fetch(`/api/watched?movieId=${movieId}`, { method: 'DELETE' });
            } else {
                const response = await fetch('/api/watched', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ movieId }),
                });
                if (response.ok) {
                    const newMovie = await response.json();
                    // Update with real ID
                    setWatchedMovies((prev) => prev.map(m => m.movieId === movieId ? newMovie : m));
                }
            }
        } catch (error) {
            console.error('Error toggling watched status:', error);
            // Revert on error
            fetchWatchedMovies();
        }
    };

    return { watchedMovies, isLoading, isWatched, toggleWatched };
}
