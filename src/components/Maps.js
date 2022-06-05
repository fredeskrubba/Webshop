import {ReactComponent as Cross} from "./img/cross.svg";
import {forwardRef, useRef} from "react";

const Maps = forwardRef((props, modalRef) => {

    return ( 
        // inline style display none on modal, because the function doesn't change the css, it just adds it inline
        <div className="modal" ref={modalRef} style={{display: "none"}}>
              <Cross onClick={
                  ()=>{
                      props.toggleMap(modalRef.current)
                  }
              }/>
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d69432.94110845983!2d9.910344415612984!3d57.05531354194559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spower!5e0!3m2!1sda!2sdk!4v1652695491007!5m2!1sda!2sdk" width="900" height="700" loading="lazy"></iframe>
        </div>
    );

}
) 
export default Maps;