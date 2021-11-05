
export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Video title',
            validation: Rule => Rule.required()
        },
        {
            name: 'url',
            type: 'url',
            title: 'YouTube video URL'
        },
    ],
    preview: {
        select: {
            url: 'url'
        },
        prepare(selection) {
            return {
                title: "Video",
                subtitle: selection.url,
            }
        }
    }
}