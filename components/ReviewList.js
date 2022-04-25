app.component('review-list', {
    template:
    /*html*/
    `<ul>
        <li v-for="(review, index) in reviews"
        :key="index">
            <div >
                <h4>{{review.name}}</h4>
                <p>{{review.review}}</p>
                <p>{{review.rating}}</p>
            </div>
        </li>
    </ul>`,
    props: {
        reviews: {
            type: Array,
            required: true,
            default: []
        }
    },
  })
  