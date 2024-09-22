import Image from "next/image";
import styles from "./404.module.scss";
import classNames from "classnames";
import { Button } from "@mui/material";
import notfoundImage from "../public/404.gif";

export default function NotFound() {
  const classes = classNames("container--sm flex--center", styles.container404);

  return (
    <div className={classes}>
      <h1 className="heading--1">404</h1>
      <Image
        alt="404 not found"
        src={notfoundImage}
        placeholder="blur"
        width={480}
        height={260}
        className={styles.image404}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjQuMywgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/MnkTPAAAACXBIWXMAAB7CAAAewgFu0HU+AAEAAElEQVR4nOzdd3gU5f7H8e9f7"
        priority
      />
      <Button href="/" color="primary" variant="outlined">
        Go back to home
      </Button>
    </div>
  );
}
