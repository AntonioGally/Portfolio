import { NextResponse } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';

export async function POST(request: Request) {
    try {
        const { message, email } = await request.json();

        const docRef = await addDoc(collection(db, 'submissions'), {
            email,
            message,
            createdAt: new Date(),
        });

        console.log('Document written with ID: ', docRef.id);

        return NextResponse.json({ message: 'Form sent' });
    } catch (error) {
        console.error('Error when saving data:', error);
        return NextResponse.json(
            { message: 'Error when saving data' },
            { status: 500 }
        );
    }
}