export default async (req, res) => {
  try {
    const response = await fetch(
      "https://mewc.cryptoscope.io/api/getblockcount/"
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error");
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
