import './App.css';
import Button from "./components/Button";
function App() {
  return (
    <>
      <div className="container">
        <div className="button-set">
          <Button size="medium" type="primary" contentType="text" text="Button CTA" />
          <Button size="large" type="primary" contentType="image-text" text="Button CTA" />
          <Button size="xl" type="primary" contentType="text-image"text="Button CTA" />
          <Button size="xxl" type="primary" contentType="text"text="Button CTA" />
          <Button size="xxl" type="primary" contentType="image"text="Button CTA" />
        </div>
        <div className="button-set">
          <Button size="medium" type="secondary" contentType="text" text="Button CTA" />
          <Button size="large" type="secondary" contentType="image-text" text="Button CTA" />
          <Button size="xl" type="secondary" contentType="text-image" text="Button CTA" />
          <Button size="xxl" type="secondary" contentType="text" text="Button CTA" />
          <Button size="xxl" type="secondary" contentType="image" text="Button CTA" />
        </div>
        <div className="button-set">
          <Button size="medium" type="tertiary" contentType="text" text="Button CTA" />
          <Button size="large" type="tertiary" contentType="image-text" text="Button CTA" />
          <Button size="xl" type="tertiary" contentType="text-image" text="Button CTA" />
          <Button size="xxl" type="tertiary" contentType="text" text="Button CTA" />
          <Button size="xxl" type="tertiary" contentType="image" text="Button CTA" />
        </div>
        <div className="button-set">
          <Button size="medium" type="link-primary" contentType="text" text="Button CTA" />
          <Button size="large" type="link-primary" contentType="image-text" text="Button CTA" />
          <Button size="xl" type="link-primary" contentType="text-image" text="Button CTA" />
          <Button size="xxl" type="link-primary" contentType="text" text="Button CTA" />
          <Button size="xxl" type="link-primary" contentType="image" text="Button CTA" />
        </div>
        <div className="button-set">
          <Button size="medium" type="link-secondary" contentType="text" text="Button CTA" />
          <Button size="large" type="link-secondary" contentType="image-text" text="Button CTA" />
          <Button size="xl" type="link-secondary" contentType="text-image" text="Button CTA" />
          <Button size="xxl" type="link-secondary" contentType="text" text="Button CTA" />
          <Button size="xxl" type="link-secondary" contentType="image" text="Button CTA" />
        </div>
        <div className="button-set">
          <Button size="medium" type="destructive" contentType="text" text="Button CTA" />
          <Button size="large" type="destructive" contentType="image-text" text="Button CTA" />
          <Button size="xl" type="destructive" contentType="text-image" text="Button CTA" />
          <Button size="xxl" type="destructive" contentType="text" text="Button CTA" />
          <Button size="xxl" type="destructive" contentType="image" text="Button CTA" />
        </div>
      </div>
    </>
  )
}

export default App
