interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light, center = true }: SectionHeadingProps) => {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {subtitle && (
        <span className={`text-sm font-semibold tracking-widest uppercase ${light ? "text-primary/70" : "text-primary"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mt-2 ${light ? "text-section-dark-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "opacity-80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
