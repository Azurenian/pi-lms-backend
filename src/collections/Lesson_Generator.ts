import type { CollectionConfig } from 'payload';

export const Lesson_Generator: CollectionConfig = {
    slug: 'lesson-generator',
    labels: {
        singular: 'Lesson Generator',
        plural: 'Lesson Generators',
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Lesson Title',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Lesson Description',
        },
        {
            name: 'subject',
            type: 'text',
            label: 'Subject',
            required: true,
        },
        {
            name: 'gradeLevel',
            type: 'text',
            label: 'Grade Level',
        },
        {
            name: 'objectives',
            type: 'array',
            label: 'Objectives',
            fields: [
                {
                    name: 'objective',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'content',
            type: 'richText',
            label: 'Lesson Content',
        },
        {
            name: 'resources',
            type: 'array',
            label: 'Resources',
            fields: [
                {
                    name: 'resource',
                    type: 'text',
                },
            ],
        },
        {
            name: 'createdBy',
            type: 'relationship',
            relationTo: 'users',
            label: 'Created By',
            required: true,
        },
    ],
};
