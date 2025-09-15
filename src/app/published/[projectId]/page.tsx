import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { createElement } from 'react';

interface ComponentItem {
    id: string;
    code: string;
}

const DynamicComponentRenderer = ({ code }: { code: string }) => {
    const isCodeBlock = code.trim().startsWith('```');
    let cleanCode = code;

    if (isCodeBlock) {
        const lines = code.trim().split('\n');
        cleanCode = lines.slice(1, lines.length - 1).join('\n');
    }

    const strippedCode = cleanCode.replace(/bg-gray-800|bg-gray-900|bg-black/g, '');

    return createElement('div', {
        className: `p-4 my-4 rounded-lg shadow-md border border-gray-200 bg-white text-gray-900`,
        dangerouslySetInnerHTML: { __html: strippedCode }
    });
};

export default async function PublishedPage({ params }: { params: { projectId: string } }) {
    const { projectId } = params;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        console.error("Supabase environment variables are not set.");
        notFound();
    }

    const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

    const { data, error } = await supabase
        .from('published_pages')
        .select('components')
        .eq('id', projectId)
        .single();

    if (error || !data) {
        console.error('Error fetching published page:', error);
        notFound();
    }

    const { components } = data;

    if (!Array.isArray(components) || components.length === 0) {
        console.error('No components found for this project ID.');
        notFound();
    }

    return (
        <main className={`flex min-h-screen flex-col items-center p-8 lg:p-24 bg-gray-100 text-gray-900 transition-colors duration-300`}>
            {components.map((item: ComponentItem) => (
                <DynamicComponentRenderer key={item.id} code={item.code} />
            ))}
        </main>
    );
}