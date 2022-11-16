#ifndef RFID_INTERFACE_GLOBAL_H
#define RFID_INTERFACE_GLOBAL_H

#include <QtCore/qglobal.h>

#if defined(RFID_INTERFACE_LIBRARY)
#  define RFID_INTERFACE_EXPORT Q_DECL_EXPORT
#else
#  define RFID_INTERFACE_EXPORT Q_DECL_IMPORT
#endif

#endif // RFID_INTERFACE_GLOBAL_H
