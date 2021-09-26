import type { NextPage } from "next";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { CurrentUserContext } from "../../src/context/CurrentUserContext";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "../../src/libs/axios";

type NodeInput = {
  name: string;
  description: string;
};

type RoadMapInput = {
  name: string;
  description: string;
  categoryName: string;
  nodes: NodeInput[];
};

const categories = ["frontend", "backend", "native", "movie", "game"]

const RoadMapNew: NextPage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RoadMapInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "nodes",
  });

  useEffect(() => {
    // ログインしていなければルートに返す
    if (!currentUser) {
      router.push("/");
    }
  }, []);

  const onSubmit = async (data: RoadMapInput) => {
    if (data.nodes.length === 0) {
      alert("ノードを1つ以上作成してください");
      return;
    }
    if (!currentUser?.uid) return;
    console.log(data);

    axios.post("/api/v1/roadmaps", {
      uid: currentUser.uid,
      name: data.name,
      description: data.description,
      category_name: data.categoryName,
      node_items: data.nodes,
    })
    .then(res => {
      console.log(res)
      alert("ロードマップを投稿しました")
      router.push('/')
    })
    .catch(e => console.error(e))
  };

  return (
    <div className="w-full min-h-screen dark:bg-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container mx-auto px−5 xl:px-64 py-10 h-full"
      >
        <div className="pb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700">
            ロードマップのタイトル
          </label>
          <input
            className="w-full px-3 py-2 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Unity実践入門～環境構築から"
            {...register(`name` as const, { required: true, maxLength: 25 })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 text-sm py-1">
              ロードマップのタイトルは必須の項目です
            </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="text-red-500 text-sm py-1">
              25文字以内で入力してください
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700">
            説明
          </label>
          <textarea
            {...register(`description` as const, {
              required: true,
              maxLength: 256,
            })}
            className="w-full px-3 py-2 text-md h-32 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="unityに入門してから習得するまでのロードマップ"
          />
          {errors.description?.type === "required" && (
            <p className="text-red-500 text-sm py-1">
              ロードマップの説明は必須の項目です
            </p>
          )}
          {errors.description?.type === "maxLength" && (
            <p className="text-red-500 text-sm py-1">
              256文字以内で入力してください
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700">
            カテゴリー
          </label>
          <select
            {...register(`categoryName` as const)}
            className="form-select p-3 block w-full mt-1 text-md bg-white leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
          >
            {categories.map((category) => <option>{category}</option>)}
          </select>
        </div>
        <div className="w-full mb-10">
          <h2 className="block mb-2 text-lg font-bold text-gray-700">ノード</h2>
          <div className="w-full bg-blue-50 p-5 mb-10">
            {fields.map((node, index) => (
              <div
                key={node.id}
                className="w-full flex items-center justify-around mb-4"
              >
                <div className="w-40">
                  <textarea
                    placeholder="Unityの教科書"
                    className="p-5 w-40 h-40 rounded-full border-2 shadow-lg inline-flex items-center justify-center text-center"
                    {...register(`nodes.${index}.name` as const, {
                      required: true,
                      maxLength: 25,
                    })}
                  />
                  {errors.nodes &&
                    errors.nodes[index]?.name?.type === "required" && (
                      <p className="text-red-500 text-sm py-1">
                        ノードのタイトルは必須の項目です
                      </p>
                    )}
                  {errors.nodes &&
                    errors.nodes[index]?.name?.type === "maxLength" && (
                      <p className="text-red-500 text-sm py-1">
                        25文字以内で入力してください
                      </p>
                    )}
                </div>
                <div className="w-1/2">
                  <textarea
                    placeholder="「Unityの教科書」では3Dゲームの作り方を復習するとともに、2Dゲームの作り方を勉強しました。このテキストで学んだことは以下の点です。・RigidBodyによる衝突判定 ・スクリプトによるゲームの制御・AudioSourceの使い方 ・Animationの使い方主にUnity公式チュートリアルでは詳しく説明されていなかったコンポーネントのつけ方を学べる良テキストでした。"
                    className="w-full px-3 py-2 text-sm h-44 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register(`nodes.${index}.description` as const, {
                      required: true,
                      maxLength: 256,
                    })}
                  />
                  {errors.nodes &&
                    errors.nodes[index]?.description?.type === "required" && (
                      <p className="text-red-500 text-sm py-1">
                        ノードの説明は必須の項目です
                      </p>
                    )}
                  {errors.nodes &&
                    errors.nodes[index]?.description?.type === "maxLength" && (
                      <p className="text-red-500 text-sm py-1">
                        256文字以内で入力してください
                      </p>
                    )}
                </div>
                <button
                  onClick={() => remove(index)}
                  className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  削除
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => append({ name: "", description: "" })}
            className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md"
          >
            追加
          </button>
        </div>
        <button
          type="submit"
          className="text-white w-full bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          作成
        </button>
      </form>
    </div>
  );
};

export default RoadMapNew;
