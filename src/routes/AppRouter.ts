import TodosPage from "../component/TodosPage";
import UserItemPage from "../component/UserItemPage";
import UserPage from "../component/UserPage";

export const AppRouter = [
    {
        path: '/users',
        Component: UserPage
    },

    {
        path: '/todos',
        Component: TodosPage
    },

    {
        path: '/users/:id',
        Component: UserItemPage
    },
]