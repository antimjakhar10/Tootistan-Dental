const Settings = require("../models/Settings");

// Get settings document (creates default if none exists)
const getOrCreateSettings = async () => {
  let settings = await Settings.findOne();
  if (!settings) {
    settings = await Settings.create({});
  }
  return settings;
};

// Public API
const getPublicSettings = async (req, res) => {
  try {
    const settings = await getOrCreateSettings();

    res.json({
      success: true,
      settings,
    });
  } catch (error) {
    console.error("Get Public Settings Error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch clinic settings",
      error: error.message,
    });
  }
};

// Admin: Get Settings
const getAdminSettings = async (req, res) => {
  try {
    const settings = await getOrCreateSettings();

    res.json({
      success: true,
      settings,
    });
  } catch (error) {
    console.error("Get Admin Settings Error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch settings",
      error: error.message,
    });
  }
};

// Admin: Update Settings
const updateSettings = async (req, res) => {
  try {
    let settings = await getOrCreateSettings();

    const {
      phone,
      altPhone,
      whatsapp,
      email,
      address,
      cityState,
      weekdayHours,
      weekendHours,
      sundayHours,
      emergencyText,
      mapEmbedUrl,
      instagramUrl,
      youtubeUrl,
      instagramHandle,
      youtubeChannelName,
    } = req.body;

    if (phone !== undefined) settings.phone = phone.trim();
    if (altPhone !== undefined) settings.altPhone = altPhone.trim();
    if (whatsapp !== undefined) settings.whatsapp = whatsapp.trim();
    if (email !== undefined) settings.email = email.trim();
    if (address !== undefined) settings.address = address.trim();
    if (cityState !== undefined) settings.cityState = cityState.trim();
    if (weekdayHours !== undefined) settings.weekdayHours = weekdayHours.trim();
    if (weekendHours !== undefined) settings.weekendHours = weekendHours.trim();
    if (sundayHours !== undefined) settings.sundayHours = sundayHours.trim();
    if (emergencyText !== undefined) settings.emergencyText = emergencyText.trim();
    if (mapEmbedUrl !== undefined) settings.mapEmbedUrl = mapEmbedUrl.trim();
    if (instagramUrl !== undefined) settings.instagramUrl = instagramUrl.trim();
    if (youtubeUrl !== undefined) settings.youtubeUrl = youtubeUrl.trim();
    if (instagramHandle !== undefined) settings.instagramHandle = instagramHandle.trim();
    if (youtubeChannelName !== undefined) settings.youtubeChannelName = youtubeChannelName.trim();

    await settings.save();

    res.json({
      success: true,
      message: "Clinic contact details & timings updated successfully!",
      settings,
    });
  } catch (error) {
    console.error("Update Settings Error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to update settings",
      error: error.message,
    });
  }
};

module.exports = {
  getPublicSettings,
  getAdminSettings,
  updateSettings,
};
