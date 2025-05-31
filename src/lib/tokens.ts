import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../prismaSingletonClient";
import { v4 as uuidv4 } from "uuid";

function signRefreshToken(refreshId: string, userId: string) {
  const refreshToken = jwt.sign(
    {
      id: refreshId,
      sub: userId,
      type: "refresh",
    },
    "" + process.env.JWT_SECRET,
    { expiresIn: "10d" }
  );
  return refreshToken;
}

function signConnectionToken(connectionId: string, userId: string) {
  const connectionToken = jwt.sign(
    {
      id: connectionId,
      sub: userId,
      type: "connection",
    },
    "" + process.env.JWT_SECRET,
    { expiresIn: "5m" }
  );
  return connectionToken;
}

function signAccessToken(userId: string) {
  const accessToken = jwt.sign(
    {
      sub: userId,
      type: "access",
    },
    "" + process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
  return accessToken;
}

export async function createAllToken(userId: string) {
  try {
    const refreshId = uuidv4();
    const connectionId = uuidv4();
    const upsertToken = await prisma.token.upsert({
      where: {
        userId: userId,
      },
      update:{
        refreshTokenId: refreshId,
        connectionTokenId: connectionId,
        isUsedConnectionToken: false,
      },
      create: {
        refreshTokenId: refreshId,
        connectionTokenId: connectionId,
        isUsedConnectionToken: false,
        userId: userId
      },
    });
    const refreshToken = signRefreshToken(refreshId, upsertToken.userId);
    const connectionToken = signConnectionToken(
      connectionId,
      upsertToken.userId
    );
    const accessToken = signAccessToken(upsertToken.userId);
    console.log(refreshToken, connectionToken, accessToken);
    return {
      success: true,
      refreshToken: refreshToken,
      connectionToken: connectionToken,
      accessToken: accessToken,
    };
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function refreshAllToken(refreshToken: string) {
  try {
    const decoded = jwt.verify(
      refreshToken,
      "" + process.env.JWT_SECRET
    ) as JwtPayload;
    // console.log(decoded);
    const refreshId = uuidv4();
    const connectionId = uuidv4();
    const tokens = await prisma.token.update({
      where: {
        userId: decoded.sub?.toString(),
        refreshTokenId: decoded.id?.toString(),
      },
      data: {
        refreshTokenId: refreshId,
        connectionTokenId: connectionId,
        isUsedConnectionToken: false,
      },
    });
    const newConnectionToken = signConnectionToken(connectionId, tokens.userId);
    const newRefreshToken = signRefreshToken(refreshId, tokens.userId);
    const newAccessTokne = signAccessToken(tokens.userId);
    return {
      success: true,
      refreshToken: newRefreshToken,
      connectionToken: newConnectionToken,
      accessToken: newAccessTokne,
    };
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function refreshAccessToken(refreshToken: string) {
  try {
    const decoded = jwt.verify(
      refreshToken,
      "" + process.env.JWT_SECRET
    ) as JwtPayload;
    if (!decoded.sub) {
      throw new Error("Invalid Refresh Token");
    }
    const newAccessToken = signAccessToken(decoded.sub);
    return {
      success: true,
      accessToken: newAccessToken,
    };
  } catch (error) {
    return { success: false, error: error };
  }
}
