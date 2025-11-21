

export default function CourseCard({ img, title, instructor, badge, rating, ratingCount, priceNew, priceOld }) {
  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={img} alt={title} />
      </div>
      <div className="course-card-content">
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-instructor">{instructor}</p>
        <span className="course-card-badge">{badge}</span>
        <div className="course-card-rating">
          ⭐ {rating} <span className="course-card-rating-count">({ratingCount})</span>
        </div>
        <div className="course-card-pricing">
          <span className="course-card-price-new">{priceNew}</span>
          <span className="course-card-price-old">{priceOld}</span>
        </div>
      </div>
    </div>
  );
}
