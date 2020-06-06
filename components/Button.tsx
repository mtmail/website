import Link from "next/link";
import { darken } from "polished";
import { colors } from "theme";

export default function Button({ children, href, ...rest }) {
  return (
    <>
      <Link href={href} {...rest}>
        <a className="button">{children}</a>
      </Link>
      <style jsx>{`
        .button {
          display: inline-block;
          background-color: ${colors.primary};
          border-color: ${colors.primary};
          color: white;
          border-width: 2px;
          border-style: solid;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          border-radius: 4px;
          padding: 10px 20px;
          box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
          font-size: 16px;
          line-height: 1.8em;
          height: 50px;
        }

        .button:hover {
          background-color: ${darken(0.1, colors.primary)};
          border-color: ${darken(0.1, colors.primary)};
          box-shadow: 0 1px 3px 0 rgba(3, 6, 26, 0.15);
        }
      `}</style>
    </>
  );
}
