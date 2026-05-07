import React from "react";
import { motion } from "motion/react";

const isExternalUrl = (href) => /^https?:\/\//i.test(href);

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  disabled = false,
  target,
  rel,
  type = "button",
  ...props
}) => {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-outline";

  const stateClass = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const finalClassName = `${baseClass} ${className} ${stateClass}`.trim();

  const motionProps = disabled
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2, ease: "easeOut" },
      };

  if (href) {
    const external = isExternalUrl(href);

    return (
      <motion.a
        href={disabled ? undefined : href}
        className={finalClassName}
        target={target ?? (external ? "_blank" : undefined)}
        rel={rel ?? (external ? "noopener noreferrer" : undefined)}
        aria-disabled={disabled ? "true" : undefined}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;