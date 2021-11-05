export default {
    name: 'split',
    title: 'Split layout',
    type: 'object',
    fields: [
        {
            name: "text",
            type: "blockContent",
            title: "Text",
            validation: Rule => Rule.required()
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            validation: Rule => Rule.required(),
            options: {
                hotspot: true,      
            }
        },
        {
            name: "textLeft",
            type: "boolean",
            title: "Text left?",
            validation: Rule => Rule.required(),
            initialValue: true,
        }
    ],
    preview: {
        select: {
            title: "text.0.children.0.text",
            textLeft: "textLeft",
            media: "image"
        },
        prepare(selection) {
            const { title, textLeft, media } = selection

            return {
                title: `${textLeft ? "LEFT" : "RIGHT"} split view`,
                subtitle: title,
                media,
            }
        }
    }
}
