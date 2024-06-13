import { requests } from '@/requests/localStorageRequests'
import { Product } from '@/types/models'
import { PayloadAction, asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

import { RootState } from './store'

const initialState: Product[] = []

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const slice = createAppSlice({
  initialState,
  name: 'products',
  reducers: create => ({
    addProduct: create.reducer((state, action: PayloadAction<{ product: Product }>) => {
      state.push(action.payload.product)
    }),
    addProductThunk: create.asyncThunk(
      async (product: Product, thunkAPI) => {
        const { getState } = thunkAPI
        const state = getState() as RootState

        try {
          await requests.mutationSimulation('products', [...state.products, product])

          return product
        } catch (e) {
          console.error(e)
        }
      },
      {
        fulfilled: (state, action) => {
          state.push(action.payload as Product)
        },
      }
    ),
    deleteProductThunk: create.asyncThunk(
      async (id: string, thunkAPI) => {
        const { getState } = thunkAPI
        const state = getState() as RootState
        const newState = state.products.filter(p => p.id !== id)
        // const newQuestionsState = { ...state.products }

        // delete newQuestionsState[id]

        try {
          await requests.mutationSimulation('products', newState)
          // await requests.mutationSimulation('questions', newQuestionsState)

          return id
        } catch (e) {
          console.error(e)
        }
      },
      {
        fulfilled: (state, action) => {
          return state.filter(p => p.id !== action.payload)
        },
      }
    ),
    getProductsThunk: create.asyncThunk(
      async () => {
        try {
          const res = await requests.querySimulation('products')

          return res
        } catch (e) {
          console.error(e)
        }
      },
      {
        fulfilled: (_, action) => {
          return action.payload as Product[]
        },
      }
    ),
  }),
})

export const productsReducer = slice.reducer
export const productsActions = slice.actions
