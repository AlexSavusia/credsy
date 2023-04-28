import { createStore } from 'vuex'
import { format as formatDate, parseISO as parseISODate } from 'date-fns'
import { slugify } from 'transliteration'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

export const store = createStore({
  state() {
    return {
      loadedHubspotScript: false,
      openHubspotPopup: false,
      blogPostNavigation: [],
      pageTitle: '',
      pageFullPath: '',
      blogQuery: '',
      selectedBlogCategories: [],
      blogCategories: [],
      blogPost: {
        id: '',
        title: '',
        mainImage: '',
        authorName: '',
        authorSlug: '',
        createdAt: '',
        updatedAt: '',
        formattedDate: '',
        readTime: '',
        color: '',
        categories: [],
        table: '',
      },
    }
  },
  mutations: {
    setSelectedBlogCategories(state, { categories, query }) {
      state.selectedBlogCategories = categories
      state.blogQuery = query
    },
    setPage(state, { title, fullPath }) {
      state.pageTitle = title
      if (process.client) state.pageFullPath = new URL(fullPath, window.location.origin).href
    },
    setBlogPostNavigation(state, { body }) {
      state.blogPostNavigation = body
        ?.filter((block) => ['h2', 'h3'].includes(block.style))
        ?.reduce((accumulator, block) => {
          const slug = slugify(block.children[0].text)

          if (['h2'].includes(block.style)) {
            accumulator = [
              ...accumulator,
              { id: block._key, name: block.children[0].text, href: `#${slug}`, items: [] },
            ]
          }

          if (['h3'].includes(block.style)) {
            const lastItem = accumulator.slice(-1)[0]
            lastItem.items = [...lastItem.items, { id: block._key, name: block.children[0].text, href: `#${slug}` }]

            accumulator = [...accumulator.slice(0, -1), lastItem]
          }

          return accumulator
        }, [])
    },
    setBlogCategories(state, { categories }) {
      state.blogCategories = categories.map((category) => category)
    },
    setBlogPost(state, { id, title, createdAt, updatedAt, mainImage, author, categories, color, table }) {
      state.blogPost = {
        ...state.blogPost,
        id,
        title,
        createdAt,
        updatedAt,
        categories,
        mainImage,
        formattedDate:
          (updatedAt && `${formatDate(parseISODate(updatedAt), 'dd LLL, yyyy')} updated`) ||
          (createdAt && formatDate(parseISODate(createdAt), 'dd LLL, yyyy')),
        authorName: author.name,
        authorSlug: author.slug,
        color: color.hex || '',
        table,
      }
    },
    loadHubspotScript(state) {
      state.loadedHubspotScript = true
    },
    setHubspotPopup(state, { open = false }) {
      state.openHubspotPopup = open
    },
  },
  actions: {
    closeHubspotPopup({ commit }) {
      commit('setHubspotPopup', { open: false })
    },
    openHubspotPopup({ commit }) {
      commit('setHubspotPopup', { open: true })
    },
    toastSuccess(context, { message = 'Success' }) {
      try {
        message && createToast(message, { type: 'success', timeout: 3000, position: 'bottom-right' })
      } catch (error) {}
    },
    toastWarning(context, { message = 'Warning' }) {
      try {
        message && createToast(message, { type: 'warning', timeout: 3000, position: 'bottom-right' })
      } catch (error) {}
    },
    toastDanger(context, { message = 'Danger' }) {
      try {
        message && createToast(message, { type: 'danger', timeout: 3000, position: 'bottom-right' })
      } catch (error) {}
    },
    toastError(context, { message = 'Error', error }) {
      try {
        message && createToast(message, { type: 'danger', timeout: 3000, position: 'bottom-right' })
        console.log(error)
      } catch (error) {}
    },
    logError(context, { error }) {
      console.log(error.toString())
    },
  },
  getters: {
    loadedHubspotScript: (state) => state.loadedHubspotScript,
  },
})
