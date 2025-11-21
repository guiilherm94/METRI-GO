import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const watchedMovies = await prisma.watchedMovie.findMany({
            orderBy: {
                watchedAt: 'desc',
            },
        });
        return NextResponse.json(watchedMovies);
    } catch (error) {
        console.error('Error fetching watched movies:', error);
        return NextResponse.json({ error: 'Error fetching watched movies' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { movieId, rating } = body;

        if (!movieId) {
            return NextResponse.json({ error: 'Movie ID is required' }, { status: 400 });
        }

        const watchedMovie = await prisma.watchedMovie.create({
            data: {
                movieId,
                rating,
            },
        });
        return NextResponse.json(watchedMovie);
    } catch (error) {
        console.error('Error saving watched movie:', error);
        return NextResponse.json({ error: 'Error saving watched movie' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const movieId = searchParams.get('movieId');

        if (!movieId) {
            return NextResponse.json({ error: 'Movie ID required' }, { status: 400 });
        }

        await prisma.watchedMovie.deleteMany({
            where: {
                movieId: movieId
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting movie:', error);
        return NextResponse.json({ error: 'Error deleting movie' }, { status: 500 });
    }
}
