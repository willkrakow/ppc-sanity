export default {
    name: "menuItem",
    title: "Menu item",
    type: "object",
    fields: [
        {
            name: "name",
            title: "Display name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "href",
            title: "Link",
            type: "reference",
            to: [
                {
                    type: "category",
                },
                {
                    type: "page"
                }
            ]
        }
    ]
}