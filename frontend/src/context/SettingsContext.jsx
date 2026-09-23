import React, { createContext, useContext, useState, useEffect } from "react";
import { getPublicSettings } from "../services/api";

const defaultSettings = {
  phone: "+91 81680 62414",
  altPhone: "+91 81680 62414",
  whatsapp: "918168062414",
  email: "info@toothistan.com",
  address: "Toothistan Dental Empire, Premium Healthcare Plaza, Main Road",
  cityState: "Hisar, Haryana, India",
  weekdayHours: "Mon - Tue: 9:00 AM - 6:00 PM",
  weekendHours: "Wed - Sat: 8:00 AM - 5:00 PM",
  sundayHours: "Sunday: Closed / Emergency Only",
  emergencyText: "24/7 Emergency Dental Care Available",
  mapEmbedUrl: "",
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",
  instagramHandle: "@toothistan_dental",
  youtubeChannelName: "Toothistan Dental",
};

const SettingsContext = createContext({
  settings: defaultSettings,
  loading: true,
  refreshSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const data = await getPublicSettings();
      if (data && Object.keys(data).length > 0) {
        setSettings((prev) => ({
          ...prev,
          ...data,
        }));
      }
    } catch (err) {
      console.warn("Using default settings fallback:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        loading,
        refreshSettings: fetchSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
