import "../styles/main.css";

export default function FeatureItem({image, alt, title, text}){
  return(
    <div class="feature-item">
      <img src={image} alt={alt} class="feature-icon" />
      <h3 class="feature-item-title">{title}</h3>
      <p>
        {text}
      </p>
    </div>
  );
}