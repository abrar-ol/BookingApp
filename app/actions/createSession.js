'use server';
import { createAdminClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function createSession(previousState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return {
            error: 'Please fill out all fields',
        };
    }

    return {
        success: true,
    }

}

export default createSession;