import React, { Component } from "react"

import {
    Card, CardImg, CardText, CardBody,
    CardTitle,
} from 'reactstrap';

export default class DishDetail extends Component {
    constructor(props) {
        super(props);

    }
    monthName(mon) {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][mon - 1];
    }


    parseISOString(s) {
        var b = s.split("T");
        var c = b[0].split("-")
        var n = this.monthName(c[1]);
        return `${n} ${c[2]}, ${c[0]}`
    }

    renderComments(comment) {
        if (comment != null)
            return (
                <ul class="list-unstyled">
                    <li >{comment.comment}<br />
                        --{comment.author}, {this.parseISOString(comment.date)}</li>
                </ul>

            );
        else
            return (
                <div></div>
            );
    }
    render() {
        const dish = this.props.selectedDish
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">

                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-5 m-1" >
                        <Card style={{ height: "100%" }}>
                            <h4 style={{ justifyContent: "left" }}>Comments</h4>
                            <CardBody>
                               
                                    {this.props.selectedDish.comments.map((comments) => (<ul key={comments.id} class="list-unstyled">{this.renderComments(comments)} </ul>))}
                               
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
