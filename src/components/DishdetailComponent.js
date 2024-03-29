import React, { Component } from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({ comments }) {
    console.log("commentsc",comments)
    if (comments != null)
        return (
            // {comments.map((comment)=>{

            // })}
            <ul class="list-unstyled">
                <li >{comments.comment}<br />
                    --{comments.author}, {comments.date}</li>
                    {/* new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date))) */}
            </ul>

        );
    else
        return (
            <div></div>
        );
}

function RenderDish({ dish }) {
    return(
    <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
    )
}
export default function DishDetail(props) {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                <Card>
                <CardBody>
            {props.comments.map((comment)=>{return(<RenderComments comments={comment} />)})}
            </CardBody>
            </Card>
                </div>
            </div>
            </div>
        );
    
}

