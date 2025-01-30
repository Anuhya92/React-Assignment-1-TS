type BookProps = {
  logo: string;
  name: string;
  author: string;
  bookPrice: string;
};

export function Book(props: BookProps) {
  return (
    <div className="book-container">
      <img src={props.logo} alt="book picture" className="book-image" />
      <div className="book-title">
        <span>Title:</span>
        {props.name}
      </div>
      <div className="book-author">
        <span>Author:</span>
        {props.author}
      </div>
      <div className="book-price">
        <span>Price: </span> {props.bookPrice}$
      </div>
    </div>
  );
}
