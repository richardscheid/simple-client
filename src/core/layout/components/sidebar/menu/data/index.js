export default [
  {
    label: 'Menu',
    content: JSON.parse(
      `[
          {
              "title":"Dashboards",
              "enable":"true",
              "content":[
                  {
                      "label":"menu.dashboard.title",
                      "to":"/dashboard",
                      "enable":"true",
                      "role":"CUSTOMER"
                  }
              ]
          },
          {
              "title":"menu.registers",
              "enable":"true",
              "content":[
                  {
                      "title":"menu.user.title",
                      "description":"menu.user.description",
                      "to":"/users",
                      "enable":"true",
                      "role":"CUSTOMER"
                  },
                  {
                      "title":"menu.category.title",
                      "description":"menu.category.description",
                      "to":"/categories",
                      "enable":"true",
                      "role":"CUSTOMER"
                  }
              ]
          }
      ]`
    ),
  },
];
