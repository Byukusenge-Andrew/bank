// src/lib/server/appwrite.js
"use server";
import { Client, Account, Databases, Users, ID, Query } from "node-appwrite";
import { cookies } from "next/headers";

// Create a base client with common configuration
const createBaseClient = () => {
  return new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);
};

export async function createSessionClient() {
  const client = createBaseClient();

  const session = cookies().get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
  };
}

export async function createAdminClient() {
  const client = createBaseClient()
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get users() {
      return new Users(client);
    },
  };
}

// Helper function to check if a session exists without throwing an error
export async function hasValidSession() {
  try {
    const session = cookies().get("appwrite-session");
    return !!(session && session.value);
  } catch (error) {
    return false;
  }
}
