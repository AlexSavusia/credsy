import { onMounted } from 'vue'
import { useStore } from 'vuex'

export const useHubspotForm = ({ id, type = 'popup' }: { id: string; type: 'popup' | 'cta' }): void => {
  const typeHubspotForm = {
    popup: {
      region: 'na1',
      portalId: '22446072',
      formId: 'edbf51aa-5959-4d4e-a197-e4929a6bc300',
    },
    cta: {
      region: 'na1',
      portalId: '22446072',
      formId: '4817f58a-219d-49a6-808a-dbd402cc7cc8',
    },
  }

  const { region, portalId, formId } = typeHubspotForm[type]

  let body;

  if (process.client) body = document.querySelector('body')

  const store = useStore()

  onMounted(() => {
    if (process.client && !store.getters.loadedHubspotScript) {
      const script = document.createElement('script')
      script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js'
      script.defer = true
      body?.appendChild(script)
      script.addEventListener('load', () => {
        store.commit('loadHubspotScript')
        createForm()
      })
    } else {
      createForm()
    }
  })

  function createForm() {
    // @ts-ignore
    if (process.client && window?.hbspt) {
      // @ts-ignore
      window?.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#${id}`,
      })
    }
  }
}
