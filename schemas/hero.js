export default {
    name: "hero",
    type: "object",
    title: "Hero",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Hero image",
            validation: Rule => Rule.required()
        },
        {
            name: "callToAction",
            type: "callToAction",
            title: "Call to action",
        },
        {
            name: "textColor",
            type: "colorlist",
            title: "Text color",
            options: {
                list: [
                    { title: "White", value: "white" },
                    { title: "Black", value: "black" },
                    { title: "Gray", value: "gray" },
                    { title: "Blue", value: "blue" },
                    { title: "Green", value: "green"},
                ]
            },
        }
    ],
    preview: {
        select: {
            subtitle: 'callToAction.title',
            media: 'image',
        },
        prepare(selection) {
            const { subtitle, media } = selection;
            
            return {
                title: "Hero",
                subtitle,
                media: media,
            };
        }
    }
}