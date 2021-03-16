import React from 'react';
import { Breadcrumb } from 'react-bootstrap';



function NavigationBreadCrumbCard(props) {

    return (
        <div>
            <Breadcrumb>
                {
                    props.previousItems.map((item,key)=>(
                        <Breadcrumb.Item href={`/`+item.link} key={key}>{item.name}</Breadcrumb.Item>

                    ))
                }
                {
                    <Breadcrumb.Item active>{props.activeItem}</Breadcrumb.Item>

                }
            </Breadcrumb>
        </div>

    );
}

export default NavigationBreadCrumbCard;