import type { CollectionConfig } from 'payload';


export const Lessons: CollectionConfig = {
    slug: 'lessons',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
           name: 'content',
            type: 'richText',
            required: true, 
        },
        {
            name: 'published',
            type: 'checkbox',
            label: 'Published',
            defaultValue: false,
        },
        {
            name: 'course',
            type: 'relationship',
            relationTo: 'courses',
            required: true,
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                readOnly: true,
            },
            defaultValue: () => new Date(),
        },
    ],
};
