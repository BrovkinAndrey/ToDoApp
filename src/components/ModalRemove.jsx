export default function ModalRemove({ hideModal, removeTask }) {
  return (
    <div className="modal-window" aria-hidden="true">
      <div className="modal-remove">
        <div className="modal-header">
          <h1 className="modal-title fs-4">Удаление Задачи</h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={hideModal}></button>
        </div>
        <div className="modal-body fs-5">
          Вы уверены что хотите удалить задачу?
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={hideModal}>
            Нет
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={removeTask}>
            Да
          </button>
        </div>
      </div>
    </div>
  );
}
