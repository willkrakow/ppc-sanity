export default {
    title: "Settings",
    type: "document",
    name: "settings",
    fields: [
        {
            name: "siteTitle",
            title: "Site title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "menuItems",
            title: "Menu items",
            type: "array",
            of: [{type: "menuItem"}],
            validation: Rule => Rule.required(),
        },
        {
            name: "seoImage",
            title: "SEO image",
            type: "image",
        },
        {
            name: "description",
            title: "SEO description",
            type: "text",
        },
    ],
}