import BlogIcon from './assets/blogIcon.png'
import CookingBook from './assets/cookingBook.png'

export const Options = [
    {name: 'Design a Recipe', icon: BlogIcon},
    {name: 'Design a Meal Plan', icon: BlogIcon},
    {name: 'Write a Blog', icon: CookingBook},
    {name: 'Upload Files', icon: BlogIcon}
  ]

export const SidebarData = [
    {name: 'Design a Recipe', link: '/create-recipe', icon: BlogIcon},
    {name: 'Design a Meal Plan', link: '/create-recipe', icon: BlogIcon},
    {name: 'Write a Blog', link: '/write-a-blog', icon: BlogIcon},
    {name: 'Upload Files', link: '/upload-a-file', icon: CookingBook}
  ]