"use client";
import { UserData } from "@/context/UserData";
import { supabase } from "@/services/supabaseClient";
import React, { use, useContext, useEffect, useState } from "react";

function Provider({ children }) {
  // usestate
  const [user, setUser] = useState(null);

  useEffect(() => {
    handleUserInsertion();
  }, []);

  const handleUserInsertion = async () => {
    try {
      // Fetch authenticated user
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error getting user:", error.message);
        return;
      }

      if (!user) {
        console.log("User not authenticated.");
        return;
      }

      // Check if user already exists in the database
      const { data: existingUser, error: fetchError } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.email);

      if (fetchError) {
        console.error("Error fetching user:", fetchError.message);
        return;
      }

      if (existingUser.length === 0) {
        // User not found, proceed with insertion
        const { data, error: insertError } = await supabase
          .from("Users")
          .insert([
            {
              email: user.email,
              name: user.user_metadata?.name || "Unknown",
              picture: user.user_metadata?.picture || "",
            },
          ])
          .select();
        setUser(data);

        if (insertError) {
          console.error("Error inserting user:", insertError.message);
        } else {
          console.log("User created:", data);
        }
      } else {
        console.log("User already exists:", existingUser);
      }
    } catch (err) {
      console.error("Unexpected error:", err.message);
    }
    setUser(user);
  };

  return (
    <UserData.Provider value={{ user, setUser }}>
      <div>{children}</div>
    </UserData.Provider>
  );
}

export default Provider;

// create a custom context for user data

export const UserContext = () => {
  const context = useContext(UserData);
  return context;
};
