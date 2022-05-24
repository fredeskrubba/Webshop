import {ReactComponent as Cross} from "./img/cross.svg";

const Maps = () => {
    return ( 
        <div className="modal">
              <Cross/>
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d69432.94110845983!2d9.910344415612984!3d57.05531354194559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spower!5e0!3m2!1sda!2sdk!4v1652695491007!5m2!1sda!2sdk" width="900" height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
     );
}
 
export default Maps;