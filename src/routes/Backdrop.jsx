
import "../routes/Backdrop.css";


const Backdrop = () => {
	return (
        <div class="backdrop is-hidden">
        <div class="modal-info">
          <button type="button" class="modal__cross-btn">
            <svg class="modal__cross-btn-icon" width="30" height="30">
              <use href="./images/icons.svg#icon-close"></use>
            </svg>
          </button>
      
          <div class="movie-info-content"></div>
        </div>
      </div>
	);
};

export default Backdrop;