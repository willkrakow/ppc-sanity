export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fieldsets: [
        {
            name: 'metadata',
            title: 'Metadata',
            options: {
                collapsible: true,
            }
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'image',
            title: "Featured image",
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required(),
            fieldset: 'metadata'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.required(),
            fieldset: 'metadata',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [
                { type: "category" }
            ],
            fieldset: 'metadata',
        },
        {
            name: 'body',
            title: 'Page content',
            type: 'array',
            of: [
                {type: "callToAction"},
                {type: "hero"},
                {type: "imageGrid"},
                {type: "split"},
                {type: "youtube"},
                {type: "block"},
                {type: "form"},
            ],
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: 'category.title',
            media: "image",
        },
        prepare(selection) {
            const { title, subtitle, media } = selection
            return {
                title,
                subtitle,
                media
            }
        }
    }
}
