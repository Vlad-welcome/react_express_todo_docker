import fruitService from "../services/fruitService.js";

export const getFruits = async (req, res) => {
  try {
    const fruits = await fruitService.getAll();

    return res.status(200).json({
      success: true,
      fruits,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
    });
  }
};
