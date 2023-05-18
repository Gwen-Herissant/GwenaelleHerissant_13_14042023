import "../styles/main.css";

export default function FeatureItem({image, alt, title, text}){
  return(
    <div className="feature-item">
      <img src={image} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>
        {text}
      </p>
    </div>
  );
}