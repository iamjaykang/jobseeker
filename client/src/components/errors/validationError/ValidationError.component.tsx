import './validationError.styles.css';

interface Props {
    errors: string[];
  }
  
  const ValidationError = ({ errors }: Props) => {
    return (
      <div className="validation-error">
        <div className="validation-error__card">
          <h3>Validation errors:</h3>
          {errors && (
            <ul className="validation-error__list">
              {errors.map((err: string, i) => (
                <li key={i} className="validation-error__item">
                  {err}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
  
  export default ValidationError