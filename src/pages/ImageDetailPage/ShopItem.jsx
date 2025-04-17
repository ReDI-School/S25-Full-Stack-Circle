import React, { useState, useRef, useEffect } from "react";
import styles from "./ShopItem.module.css";
import CommentSection from "./CommentSection";

const suggestions = [
	"Art journal",
	"Collage art",
	"Art inspo",
	"Creative",
	"Create board",
];

const ShopItem = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [search, setSearch] = useState("");
	const popupRef = useRef(null);

	// Close dropdown on outside click
	useEffect(() => {
		function handleClickOutside(event) {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [popupRef]);

	const filteredSuggestions = suggestions.filter((item) =>
		item.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className={styles["shop-item"]}>
			<div className={styles["shop-item-image"]}>
				<img src="https://picsum.photos/300/300" alt="Product" />
			</div>

			<div className={styles["shop-item-details"]}>
				{/* Buttons now inside shop-item-details */}
				<div className={styles["profile-wrapper"]} ref={popupRef}>
					<button
						className={styles["profile-button"]}
						onClick={() => setMenuOpen(!menuOpen)}>
						Profile
					</button>
					{menuOpen && (
						<div className={styles["profile-popup"]}>
							<input
								type="text"
								className={styles["search-input"]}
								placeholder="Search"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<ul className={styles.suggestions}>
								{filteredSuggestions.map((item, index) => (
									<li key={index} className={styles["suggestion-item"]}>
										<button>+ {item}</button>
									</li>
								))}
							</ul>
						</div>
					)}
					<button className={styles["Save-button"]}>Save</button>
				</div>
				<p className={styles.brand}>Order Of Style</p>
				<p className={styles.title}>Le High Skinny Jean...</p>
				<p className={styles.price}>€ 1,95</p>
				<div className={styles["shop-item-description"]}>
					<CommentSection />
				</div>
			</div>
		</div>
	);
};

export default ShopItem;
