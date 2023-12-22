import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
      id: 1,
      rating: 10,
      text: 'aja lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.uk'
    },
    {
      id: 2,
      rating: 7,
      text: 'aja lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.uk'
    },
    {
      id: 3,
      rating: 3,
      text: 'aja lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.uk'
    },
    {
      id: 4,
      rating: 8,
      text: 'aja lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.uk'
    }
])
