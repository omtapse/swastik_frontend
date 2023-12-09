import { configureStore } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import NotesReducer from './apps/notes/NotesSlice';
import EmailReducer from './apps/email/EmailSlice';
import TicketReducer from './apps/tickets/TicketSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import EcommerceReducer from './apps/eCommerce/EcommerceSlice';
import UserProfileReducer from './apps/userProfile/UserProfileSlice';
import BlogReducer from './apps/blog/BlogSlice';
import AdminReducer from './apps/admin/adminSlice'
import ProgramReducer from './apps/programs/ProgramListSlice'
import PillarReducer from './apps/pillars/PillarSlice'
import ViharReducer from './apps/vihar/ViharSlice'
import GuruReducer from './apps/guru/GuruSlice'
import CountReducer from './apps/dashboardCount/CountSlice'

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    chatReducer: ChatsReducer,
    emailReducer: EmailReducer,
    notesReducer: NotesReducer,
    contactsReducer: ContactsReducer,
    ticketReducer: TicketReducer,
    ecommerceReducer: EcommerceReducer,
    userpostsReducer: UserProfileReducer,
    blogReducer: BlogReducer,
    adminReducer: AdminReducer,
    ProgramReducer: ProgramReducer,
    PillarReducer : PillarReducer,
    ViharReducer : ViharReducer,
    GuruReducer : GuruReducer,
    countReducer: CountReducer
  },
});

export default store;
