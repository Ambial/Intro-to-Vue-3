app.component('review-list', {
    template:
    /*html*/
    `<div class="review-container">
    <h3>Reviews:</h3>
    <ul>
        <li v-for="(review, index) in reviews"
        :key="index">
            <div >
                <h4>{{review.name}}</h4>
                <p>{{review.review}}</p>
                <p>{{review.rating}}</p>
            </div>
        </li>
    </ul>
    </div>`,
    props: {
        reviews: {
            type: Array,
            required: true,
            default: []
        }
    },
  })
  