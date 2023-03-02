import { act, renderHook } from "@testing-library/react";
import useUnsplash from "./useUnsplash";
import { RecoilRoot } from "recoil";
import unsplashService from "./unsplash";

jest.mock("./unsplash", () => ({
  search: jest.fn(() => ({
    total_pages: 1,
    total: 1,
    results: [
      {
        id: "6T_z_JBwFWw",
        promoted_at: null,
        width: 2592,
        height: 3888,
        color: "#000",
        blur_hash: "LBD0JxxYIps:?^Mxt8jYbvRPR*Ri",
        description: "mocked desc",
        alt_description: "mocked alt desc",
      },
    ],
  })),
}));

test("the hooksignature and the default demoPayload", () => {
  const { result } = renderHook(() => useUnsplash(), {
    wrapper: RecoilRoot,
  });

  const {
    results: { total_pages, total, results: images },
    executeSearch,
  } = result.current;

  expect(executeSearch).toBeInstanceOf(Function);
  expect(images).toBeInstanceOf(Array);
  expect(total_pages).toEqual(65);
  expect(total).toEqual(1300);
  expect(total).toEqual(1300);
});

test("function executeSearch should hit the unSplash service", async () => {
  const { result } = renderHook(() => useUnsplash(), {
    wrapper: RecoilRoot,
  });

  const { executeSearch } = result.current;

  await act(async () => {
    await executeSearch("searchString");
  });
  expect(unsplashService.search).toBeCalledTimes(1);
  expect(result.current.results).toEqual({
    total_pages: 1,
    total: 1,
    results: [
      {
        id: "6T_z_JBwFWw",
        promoted_at: null,
        width: 2592,
        height: 3888,
        color: "#000",
        blur_hash: "LBD0JxxYIps:?^Mxt8jYbvRPR*Ri",
        description: "mocked desc",
        alt_description: "mocked alt desc",
      },
    ],
  });
});
