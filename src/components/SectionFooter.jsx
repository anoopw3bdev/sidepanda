import Button from "./ui/Button"
import "../styles/SectionFooter.css"

export const SectionFooter = () => {
    return (
      <footer className="section-footer">
        <div>
          <span className="description">
            POWERED BY <a href="https://www.appointo.me/">APPOINTO</a>
          </span>
        </div>
        <Button text="Next" />
      </footer>
    );
}