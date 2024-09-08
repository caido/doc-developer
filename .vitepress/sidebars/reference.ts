import {
    DefaultTheme
} from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [{
        text: "Introduction",
        items: [{
                text: 'Directory',
                link: '/reference/'
            },
        ]
    },
    {
        text: 'Plugins',
        items: [{
                text: 'Custom CSS',
                link: '/reference/plugins/custom_css'
            },
            {
                text: '(WIP) Custom JS',
                link: '/reference/plugins/custom_js'
            },
            {
                text: '(WIP) Custom Workflow Nodes',
                link: '/reference/plugins/custom_workflow_nodes'
            }
        ]
    },
    {
        text: 'SDKs',
        items: [
            {
                text: 'Backend',
                link: '/reference/sdks/backend_sdk',
            },
            {
                text: 'Frontend (WIP)',
                link: '/reference/sdks/frontend_sdk',
            },
        ]
    },
]
