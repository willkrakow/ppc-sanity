export default {
    name: "callToAction",
    type: "object",
    title: "Call to action",
    fields: [
        {
            name: "title",
            type: "text",
            title: "Title text",
            validation: Rule => Rule.required()
        },
        {
            name: "text",
            type: "text",
            title: "Intro text"
        },
        {
            name: "link",
            type: "url",
            title: "URL",
            description: "Internal or external",
            validation: Rule => Rule.uri({
                allowRelative: true,
            }).required()
        },
        {
            name: "label",
            type: "string",
            title: "Button label"
        }
    ],
    preview: {
        select: {
            label: "label",
        },
        prepare(selection) {
            const { label } = selection
            return {
                title: "Call to action",
                subtitle: label,
            }
        }
    }
}